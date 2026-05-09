import { useEffect } from "react";
import { ArrowLeft, Mail, Globe } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { useLang } from "../i18n/LanguageContext";

type Props = {
  onNavigate: (to: string) => void;
  onScrollTo: (id: string) => void;
};

export default function PrivacyPage({ onNavigate, onScrollTo }: Props) {
  const { lang } = useLang();

  useEffect(() => {
    document.title = "몽글키즈 개인정보처리방침 · Monglekids Privacy Policy";
  }, [lang]);

  return (
    <>
      <Header onCtaClick={() => onScrollTo("beta")} onNavClick={onScrollTo} />

      <main className="container-page max-w-3xl py-14 md:py-20">
        {/* Back link */}
        <button
          onClick={() => onNavigate("/")}
          className="font-display mb-8 inline-flex items-center gap-1.5 text-[13px] font-semibold text-grape-700 transition hover:text-grape-800"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          홈으로 / Back to home
        </button>

        {/* Hero */}
        <header className="mb-12">
          <span className="font-display inline-flex items-center gap-2 rounded-full bg-grape-50 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-grape-700 ring-1 ring-grape-100">
            Privacy Policy
          </span>
          <h1 className="mt-4 text-balance text-[28px] font-bold leading-[1.28] tracking-tight text-ink-900 sm:text-[34px]">
            몽글키즈(Monglekids) 개인정보처리방침
            <br />
            <span className="text-ink-700">Monglekids Privacy Policy</span>
          </h1>

          <dl className="mt-6 space-y-1.5 text-[14px] text-ink-700">
            <Meta label="시행일 / Effective Date" value="2026년 5월 8일 / May 8, 2026" />
            <Meta label="운영자 / Operator" value="Arcawave" />
            <Meta
              label="연락처 / Contact"
              value={
                <a
                  className="text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="mailto:help@arcawave.xyz"
                >
                  help@arcawave.xyz
                </a>
              }
            />
            <Meta
              label="웹사이트 / Website"
              value={
                <a
                  className="text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="https://www.monglekids.com"
                >
                  https://www.monglekids.com
                </a>
              }
            />
          </dl>
        </header>

        {/* Table of contents */}
        <nav
          aria-label="목차"
          className="mb-14 rounded-3xl bg-white p-5 ring-1 ring-grape-100/70 clay-shadow-sm sm:p-6"
        >
          <h2 className="font-display text-[11.5px] font-semibold uppercase tracking-[0.16em] text-grape-700">
            목차 / Contents
          </h2>
          <ol className="mt-3 grid grid-cols-1 gap-1 text-[14.5px] font-medium text-ink-700 sm:grid-cols-2">
            <TOCItem href="#summary">1. 상단 요약 / Summary</TOCItem>
            <TOCItem href="#kr">2. 한국어 개인정보처리방침</TOCItem>
            <TOCItem href="#en">3. English Privacy Policy</TOCItem>
            <TOCItem href="#contact">4. Contact / 연락처</TOCItem>
          </ol>
        </nav>

        {/* ---------- 1. SUMMARY ---------- */}
        <Section id="summary" title="1. 상단 요약 / Summary">
          <P>
            몽글키즈(Monglekids)는 6세부터 12세까지의 어린이를 위한 STEAM 교육 앱입니다.
            아이들은 미션 형식으로 다리 만들기, 색 찾기, 손 동작 인식 등 창의적인 학습 활동을
            할 수 있습니다. 몽글키즈는 어린이의 개인정보를 가능한 적게 처리하고, 카메라 영상과
            사진은 가능한 한 기기 내부에서만 처리합니다.
          </P>

          <H3>핵심 요약 / Key Summary</H3>
          <div className="my-5 overflow-hidden rounded-2xl ring-1 ring-grape-100 clay-shadow-sm">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-cream-100/60">
                <tr>
                  <th className="w-[34%] border-b border-grape-100/70 px-4 py-3 font-semibold text-ink-800">
                    항목 / Item
                  </th>
                  <th className="border-b border-grape-100/70 px-4 py-3 font-semibold text-ink-800">
                    내용 / Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {SUMMARY_ROWS.map((row, i) => (
                  <tr
                    key={row.k}
                    className={i % 2 === 0 ? "bg-white" : "bg-cream-50/50"}
                  >
                    <td className="border-b border-grape-100/50 px-4 py-3 font-semibold text-ink-800">
                      {row.k}
                    </td>
                    <td className="border-b border-grape-100/50 px-4 py-3 text-ink-700">
                      {row.v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>어린이와 부모님께 드리는 쉬운 설명</H3>
          <P>
            몽글키즈는 아이가 카메라로 색을 찾거나 손동작 미션을 할 때 카메라 영상을 저장하지
            않습니다. 셀카나 사진을 쓰는 활동이 있더라도 사진은 활동 후 바로 버립니다. 마이크로
            말한 내용은 짧은 텍스트로 바뀌어 앱 기능에만 사용되고, 몽글키즈는 음성 원본을
            보관하지 않습니다.
          </P>
          <P>
            부모 리포트를 확인하거나 공유하기로 선택한 경우에만 닉네임, 별 개수, 미션 결과,
            4대 역량 점수 같은 일부 정보가 서버에 저장될 수 있습니다. 몽글키즈는 광고를 보여주지
            않고, 아이를 추적하지 않으며, 개인정보를 판매하지 않습니다.
          </P>

          <H3>English Summary</H3>
          <P>
            Monglekids is a STEAM education app for children aged 6 to 12. We do not show ads,
            do not track users, do not use advertising identifiers, and do not sell personal
            information. Camera video and photos are processed on device whenever possible and
            are not stored or uploaded by Monglekids. Parent report data is uploaded only when
            the parent report feature is explicitly used.
          </P>
        </Section>

        {/* ---------- 2. KOREAN POLICY ---------- */}
        <Section id="kr" title="2. 한국어 개인정보처리방침">
          <H3>몽글키즈(Monglekids) 개인정보처리방침</H3>
          <P>시행일: 2026년 5월 8일</P>
          <P>
            Arcawave(이하 “회사”)는 어린이를 위한 STEAM 교육 앱인 몽글키즈(Monglekids)(이하
            “서비스”)를 운영합니다. 본 개인정보처리방침은 iOS, Android, Web에서 제공되는
            서비스가 어떤 정보를 처리하고, 그 정보를 어떻게 사용하고 보호하는지 설명합니다.
          </P>
          <P>
            회사는 어린이의 개인정보 보호를 매우 중요하게 생각합니다. 회사는 대한민국 개인정보
            보호법(PIPA), 미국 아동 온라인 개인정보 보호법(COPPA), 유럽 개인정보 보호법(GDPR)
            등 적용 가능한 개인정보 보호 법령과 앱마켓 정책을 준수하기 위해 노력합니다.
          </P>

          <H3>1. 개요</H3>
          <P>
            몽글키즈는 6세부터 12세까지의 어린이를 위해 설계된 교육 앱입니다. 서비스는 미션
            형식의 STEAM 학습 활동을 제공합니다. 예를 들어 어린이는 다리 만들기, 색 찾기, 손
            동작 인식 활동 등을 수행할 수 있습니다.
          </P>
          <P>
            서비스는 학습 활동 안에서 문제해결력, 창의력, 자기주도성, 표현력 등 4대 역량을
            확인하고, 미션 완료 후 부모 또는 가족이 볼 수 있는 활동 리포트를 제공할 수 있습니다.
          </P>
          <P>
            서비스에는 어린이가 미션을 더 쉽게 이해하고 진행할 수 있도록 돕는 대화형 교육
            도우미 또는 AI companion 기능이 포함될 수 있습니다. 이 기능은 교육 활동 안내, 미션
            진행 보조, 간단한 피드백 제공을 위한 것이며, 광고 또는 사용자 추적 목적으로
            사용되지 않습니다.
          </P>
          <P>
            회사는 어린이 개인정보를 가능한 한 적게 처리합니다. 카메라 영상, 사진, 일부
            상호작용 데이터는 가능한 범위에서 기기 내부에서만 처리되며, 회사 서버로 전송하지
            않습니다. 서버 저장은 부모 리포트 확인 또는 공유 기능을 명시적으로 사용하는 경우에
            한정됩니다.
          </P>

          <H3>2. 수집하는 정보</H3>
          <P>회사는 서비스 제공을 위해 아래 정보를 처리할 수 있습니다.</P>

          <H4>2.1 기기 내부에서만 처리되는 정보</H4>
          <P>
            다음 정보는 사용자 기기 내부에서만 처리되며, 회사 서버로 전송되거나 저장되지
            않습니다.
          </P>

          <H5>카메라 영상</H5>
          <P>
            서비스는 색 추출 미션, 손 동작 인식 미션, 튜토리얼 손 동작 단계 등을 위해 카메라를
            사용할 수 있습니다. 예를 들어 BridgeFindColor 미션에서는 색을 찾기 위해 카메라
            영상이 사용될 수 있고, BridgeChooseMaterial 미션에서는 손 동작 인식이 사용될 수
            있습니다.
          </P>
          <P>
            카메라 영상은 Apple Vision Framework 등 기기 내 처리 기술을 사용하여 실시간으로
            처리됩니다. 회사는 카메라 영상을 저장하지 않으며, 서버로 업로드하지 않고, 광고 또는
            분석 목적으로 사용하지 않습니다.
          </P>

          <H5>사진</H5>
          <P>
            일부 튜토리얼 단계에서 카메라로 촬영한 사진 또는 셀카가 동물 매칭 활동에 사용될 수
            있습니다. 이 사진은 해당 활동을 위해 일시적으로만 처리되고 즉시 폐기됩니다. 회사는
            해당 사진을 저장하지 않으며 서버로 전송하지 않습니다.
          </P>

          <H5>마이크 음성</H5>
          <P>
            서비스는 이름 입력, 다리 이름 짓기 등 어린이가 말로 입력하는 기능을 제공할 수
            있습니다. 회사는 음성 원본을 저장하지 않습니다. 음성은 짧은 텍스트로 변환되어 해당
            기능 수행에 사용됩니다.
          </P>
          <P>
            플랫폼에 따라 음성 인식 처리는 Apple, Google 또는 사용 중인 브라우저 제공자의
            서버에서 일부 수행될 수 있습니다. 회사는 음성 원본을 회사 서버에 저장하지 않으며,
            인식된 텍스트만 앱 기능 수행에 사용합니다.
          </P>

          <H4>2.2 기기에만 저장되는 정보</H4>
          <P>
            다음 정보는 기본적으로 사용자 기기에만 저장되며 회사 서버로 전송되지 않습니다.
          </P>
          <UL
            items={[
              "사용자가 입력한 닉네임",
              "사용자가 선택한 나이대(선택사항)",
              "미션 진행 상태",
              "별 개수",
              "획득 뱃지",
              "앱 내 설정 또는 진행 기록",
            ]}
          />
          <P>
            이 정보는 앱의 학습 진행을 이어가기 위해 사용됩니다. 사용자가 앱을 삭제하거나 앱 내
            초기화 기능을 사용하는 경우, 기기에 저장된 정보가 삭제될 수 있습니다.
          </P>

          <H4>2.3 부모 리포트 공유 시 서버에 저장되는 정보</H4>
          <P>
            사용자가 미션 완료 후 “부모 리포트 확인하기”, “부모 리포트 공유하기” 또는 이에
            준하는 부모 공유 기능을 명시적으로 선택하는 경우에만 일부 정보가 회사 서버 또는
            회사가 사용하는 서비스 제공업체(Supabase 등)에 업로드될 수 있습니다.
          </P>
          <P>업로드될 수 있는 정보는 다음과 같습니다.</P>
          <UL
            items={[
              "미션 평가 결과",
              "문제해결력, 창의력, 자기주도성, 표현력 등 4대 역량 점수",
              "미션 진행 시간",
              "마이크 또는 카메라 사용 여부",
              "닉네임",
              "별 개수",
              "획득 뱃지 또는 학습 성취 정보",
            ]}
          />
          <P>
            부모 리포트는 share_token이 포함된 공유 URL을 통해 부모 또는 가족에게 공유될 수
            있습니다. 공유 URL을 받은 사람은 해당 리포트를 볼 수 있으므로, 부모 또는 보호자는
            링크를 신뢰할 수 있는 사람에게만 공유해야 합니다.
          </P>
          <P>
            회사는 사용자의 명시적인 행동 없이 부모 리포트 데이터를 업로드하지 않습니다. 어린이
            개인정보가 서버에 업로드되는 기능에는 부모 또는 법정대리인의 확인, 동의 또는 부모
            게이트를 적용하는 것을 원칙으로 합니다.
          </P>

          <H4>2.4 대화형 교육 도우미 또는 AI companion 관련 정보</H4>
          <P>
            서비스는 어린이가 미션을 이해하고 진행할 수 있도록 대화형 교육 도우미 또는 AI
            companion 기능을 제공할 수 있습니다. 이 기능에서 어린이가 선택하거나 입력한 내용,
            음성 인식으로 변환된 텍스트, 미션 진행 맥락이 기능 제공을 위해 일시적으로 처리될 수
            있습니다.
          </P>
          <P>
            회사는 이 정보를 광고, 맞춤형 광고, 사용자 추적 또는 데이터 판매 목적으로 사용하지
            않습니다. 대화형 교육 도우미 기능에 외부 AI 서비스 제공자가 사용되는 경우, 회사는
            실제로 전송되는 정보, 제공자, 처리 목적, 보관 여부를 본 방침 또는 별도 고지를 통해
            안내합니다.
          </P>

          <H4>2.5 음성 인식 제공자</H4>
          <P>플랫폼별 음성 인식 기능은 다음 제공자를 통해 동작할 수 있습니다.</P>
          <UL
            items={[
              "iOS: Apple SFSpeechRecognizer",
              "Android: Google Speech Recognizer",
              "Web: Web Speech API 또는 브라우저 제공 음성 인식 기능",
            ]}
          />
          <P>
            음성 인식 제공자는 음성 인식을 수행하기 위해 음성 데이터를 처리할 수 있습니다. 이
            처리에는 각 제공자의 개인정보 처리방침과 약관이 적용될 수 있습니다. 회사는 음성
            원본을 회사 서버에 보관하지 않습니다.
          </P>

          <H4>2.6 기술적 운영 정보</H4>
          <P>
            웹 호스팅, 데이터베이스 운영, 보안, 오류 방지 등을 위해 Vercel, Supabase 등 서비스
            제공업체가 IP 주소, 요청 시간, 사용자 에이전트, 서버 로그 등 기술 정보를 일시적으로
            처리할 수 있습니다.
          </P>
          <P>
            회사는 이러한 기술 정보를 어린이의 행동 추적, 광고, 맞춤형 광고, 제3자 분석 목적으로
            사용하지 않습니다.
          </P>

          <H4>2.7 회사가 수집하지 않는 정보</H4>
          <P>회사는 현재 다음 정보를 수집하지 않습니다.</P>
          <UL
            items={[
              "정확한 위치 정보",
              "연락처",
              "광고 식별자(IDFA, AAID 등)",
              "외부 SNS 로그인 정보",
              "제3자 광고 또는 맞춤형 광고를 위한 행태정보",
              "결제 카드 정보",
              "카메라 영상 원본",
              "음성 원본",
              "저장된 사진 또는 동영상 파일",
            ]}
          />
          <P>
            서비스는 현재 무료로 제공됩니다. 향후 인앱결제가 도입되는 경우, 결제는 Apple App
            Store 또는 Google Play 등 앱마켓 결제 시스템을 통해 처리될 수 있으며, 회사는 결제
            카드 번호를 직접 저장하지 않습니다. 인앱결제 도입 시 본 방침과 앱마켓 개인정보
            표시를 업데이트합니다.
          </P>

          <H3>3. 사용 목적</H3>
          <P>회사는 정보를 다음 목적을 위해 사용합니다.</P>
          <UL
            items={[
              "STEAM 교육 미션 제공",
              "어린이의 미션 진행 상태 저장",
              "별, 뱃지 등 학습 성취 표시",
              "문제해결력, 창의력, 자기주도성, 표현력 기반 활동 결과 생성",
              "부모 리포트 생성 및 공유",
              "음성 입력, 색 인식, 손 동작 인식 등 앱 기능 제공",
              "대화형 교육 도우미 또는 AI companion 기능 제공",
              "서비스 보안 유지 및 부정 접근 방지",
              "오류 방지 및 서비스 안정성 유지",
              "법령 및 앱마켓 정책 준수",
            ]}
          />
          <P>
            회사는 어린이 정보를 광고, 맞춤형 광고, 제3자 분석, 사용자 추적 또는 판매 목적으로
            사용하지 않습니다.
          </P>

          <H3>4. 정보 공유</H3>
          <P>
            회사는 어린이 개인정보를 판매하지 않습니다. 또한 회사는 어린이 정보를 제3자 광고
            네트워크, 데이터 브로커, 맞춤형 광고 사업자에게 제공하지 않습니다.
          </P>
          <P>회사는 현재 다음 행위를 하지 않습니다.</P>
          <UL
            items={[
              "광고 표시",
              "제3자 분석 도구 사용(Firebase Analytics, Google Analytics 등)",
              "사용자 추적",
              "광고 식별자 사용",
              "위치 정보 수집",
              "연락처 접근",
              "외부 SNS 로그인 사용",
            ]}
          />
          <P>다만 서비스 운영을 위해 다음 유형의 서비스 제공업체를 사용할 수 있습니다.</P>
          <UL
            items={[
              "Vercel: 웹 호스팅",
              "Supabase: 데이터베이스 및 부모 리포트 저장",
              "Apple, Google 또는 브라우저 제공자: 음성 인식 기능",
              "대화형 교육 도우미 기능 제공을 위해 필요한 경우 외부 AI 서비스 제공자",
            ]}
          />
          <P>
            이들 제공업체는 서비스 제공, 보안, 인프라 운영 등 필요한 목적 범위 내에서만 정보를
            처리합니다.
          </P>
          <P>
            부모 리포트 공유 기능을 사용할 경우, 공유 URL을 받은 부모 또는 가족이 리포트 내용을
            볼 수 있습니다. 회사는 리포트를 공개 게시하지 않으며, 공유 URL은 사용자가 직접
            공유하는 경우에만 전달됩니다.
          </P>
          <P>
            회사는 법적 의무를 준수하거나 서비스와 사용자를 보호하기 위해 필요한 경우 관계
            법령에 따라 정보를 공개할 수 있습니다.
          </P>

          <H3>5. 데이터 보관 및 보안</H3>
          <P>회사는 개인정보를 필요한 기간 동안만 보관합니다.</P>
          <UL
            items={[
              "기기 내부 데이터: 사용자가 앱을 사용하는 동안 기기에 저장됩니다. 사용자가 앱을 삭제하거나 초기화하면 삭제될 수 있습니다.",
              "부모 리포트 데이터: 리포트 공유 기능 제공을 위해 보관되며, 원칙적으로 업로드일로부터 최대 12개월 동안 보관한 후 삭제 또는 비식별화합니다. 부모 또는 법정대리인이 삭제를 요청하면 더 빨리 삭제할 수 있습니다.",
              "기술 로그: 보안, 오류 방지, 서비스 운영에 필요한 기간 동안만 보관됩니다.",
            ]}
          />
          <P>회사는 개인정보 보호를 위해 다음과 같은 조치를 사용합니다.</P>
          <UL
            items={[
              "HTTPS를 통한 암호화 통신",
              "Supabase Row Level Security(RLS)",
              "접근 권한 제한",
              "최소 정보 수집",
              "부모 리포트 URL의 토큰 기반 접근",
              "운영자 접근 최소화",
              "삭제 요청 처리 절차 운영",
            ]}
          />
          <P>
            다만 인터넷 또는 전자적 저장 방식은 완벽하게 안전하다고 보장할 수 없습니다. 회사는
            합리적인 보호 조치를 계속 개선하겠습니다.
          </P>

          <H3>6. 사용자 권리</H3>
          <P>부모 또는 법정대리인은 자녀의 개인정보에 대해 다음 권리를 행사할 수 있습니다.</P>
          <UL
            items={[
              "개인정보 열람 요청",
              "개인정보 수정 요청",
              "개인정보 삭제 요청",
              "개인정보 처리 제한 요청",
              "동의 철회 요청",
              "개인정보 이동 또는 전송 요청",
              "추가 수집 중단 요청",
            ]}
          />
          <P>요청은 아래 연락처로 보낼 수 있습니다.</P>
          <UL
            items={[
              <>
                이메일:{" "}
                <a
                  className="text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="mailto:help@arcawave.xyz"
                >
                  help@arcawave.xyz
                </a>
              </>,
            ]}
          />
          <P>
            회사는 요청자가 부모 또는 정당한 법정대리인인지 확인하기 위해 필요한 최소한의
            정보를 요청할 수 있습니다. 예를 들어 공유 리포트 URL, share_token, 닉네임, 요청자의
            연락처 등을 요청할 수 있습니다.
          </P>
          <P>회사는 적용 가능한 법령에 따라 합리적인 기간 내에 요청을 처리합니다.</P>

          <H3>7. 어린이 정보 보호</H3>
          <P>
            서비스는 어린이를 대상으로 하며, 13세 미만 어린이의 사용을 고려하여 설계되었습니다.
            회사는 COPPA를 포함한 어린이 개인정보 보호 법령을 준수하기 위해 노력합니다.
          </P>
          <P>회사는 다음 원칙을 따릅니다.</P>
          <UL
            items={[
              "어린이 개인정보를 필요한 최소한으로만 처리합니다.",
              "광고와 맞춤형 광고를 제공하지 않습니다.",
              "제3자 분석 도구를 사용하지 않습니다.",
              "위치 정보와 연락처를 수집하지 않습니다.",
              "카메라 영상과 사진은 가능한 경우 기기 내부에서만 처리합니다.",
              "음성 원본을 회사 서버에 저장하지 않습니다.",
              "부모 리포트 업로드는 명시적인 사용자 행동과 부모 또는 법정대리인의 확인이 필요한 기능으로 설계합니다.",
              "부모 또는 법정대리인이 요청하면 자녀의 개인정보를 열람, 수정, 삭제하거나 추가 수집을 중단할 수 있도록 지원합니다.",
            ]}
          />
          <P>
            서비스 내 외부 링크, 구매, 결제, 공유 또는 성인 대상 기능이 추가되는 경우 회사는
            부모 게이트 또는 적절한 보호 절차를 적용합니다.
          </P>

          <H3>8. 국제 데이터 이전</H3>
          <P>
            서비스는 전 세계에서 제공될 수 있으며, 회사가 사용하는 서비스 제공업체의 서버는
            대한민국, 미국 또는 기타 국가에 위치할 수 있습니다. 실제 저장 위치는 Supabase,
            Vercel 등 서비스 제공업체의 설정과 리전에 따라 달라질 수 있습니다.
          </P>
          <P>국외 이전 또는 국외 처리가 발생하는 경우의 예시는 다음과 같습니다.</P>
          <UL
            items={[
              "Supabase: 부모 리포트 데이터 저장 및 데이터베이스 운영",
              "Vercel: 웹 호스팅 및 기술 로그 처리",
              "Apple, Google 또는 브라우저 제공자: 음성 인식 처리",
              "외부 AI 서비스 제공자: 대화형 교육 도우미 기능 제공에 필요한 텍스트 처리",
            ]}
          />
          <P>
            회사는 관련 법령에 따라 필요한 고지, 동의, 계약상 보호 조치, 접근 제한, 암호화
            통신 등 합리적인 보호 조치를 적용합니다.
          </P>

          <H3>9. 정책 변경</H3>
          <P>
            회사는 서비스 기능, 법령, 앱마켓 정책 변경에 따라 본 개인정보처리방침을 수정할 수
            있습니다.
          </P>
          <P>
            중요한 변경이 있는 경우 앱, 웹사이트 또는 기타 적절한 방법으로 안내합니다. 변경된
            방침은 표시된 시행일부터 적용됩니다.
          </P>

          <H3>10. 연락처</H3>
          <P>
            개인정보 보호 관련 문의, 삭제 요청, 부모 권리 행사는 아래 연락처로 보내주시기
            바랍니다.
          </P>
          <UL
            items={[
              "서비스명: 몽글키즈(Monglekids)",
              "운영자: Arcawave",
              <>
                이메일:{" "}
                <a
                  className="text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="mailto:help@arcawave.xyz"
                >
                  help@arcawave.xyz
                </a>
              </>,
              "웹사이트: https://www.monglekids.com",
            ]}
          />
        </Section>

        {/* ---------- 3. ENGLISH POLICY ---------- */}
        <Section id="en" title="3. English Privacy Policy">
          <H3>Monglekids Privacy Policy</H3>
          <P>Effective Date: May 8, 2026</P>
          <P>
            Arcawave (“we,” “us,” or “our”) operates Monglekids, also known in Korean as 몽글키즈,
            a STEAM education app for children. This Privacy Policy explains how we process,
            use, share, retain, and protect information in our iOS, Android, and Web services.
          </P>
          <P>
            We take children’s privacy seriously. We strive to comply with applicable privacy
            laws, including the Children’s Online Privacy Protection Act (“COPPA”), the General
            Data Protection Regulation (“GDPR”), and Korea’s Personal Information Protection Act
            (“PIPA”), as well as applicable app marketplace policies.
          </P>

          <H3>1. Introduction</H3>
          <P>
            Monglekids is designed for children aged 6 to 12. The app provides mission-based
            STEAM learning activities, such as building bridges, finding colors, and recognizing
            hand gestures.
          </P>
          <P>
            The app may measure learning-related competencies such as problem-solving,
            creativity, self-directed learning, and expression. After a mission is completed,
            the app may allow a parent or family member to view an activity report.
          </P>
          <P>
            The app may include an interactive educational assistant or AI companion to help
            children understand and complete learning missions. This feature is intended to
            support educational activities, mission guidance, and simple feedback. It is not
            used for advertising or user tracking.
          </P>
          <P>
            We process children’s information in a data-minimizing way. Whenever possible,
            camera video, photos, and interaction data are processed only on the user’s device.
            Server storage happens only when the parent report viewing or sharing feature is
            explicitly used.
          </P>

          <H3>2. Information We Collect</H3>
          <P>We may process the following information to provide the service.</P>

          <H4>2.1 Information Processed Only on the Device</H4>
          <P>
            The following information is processed locally on the user’s device and is not sent
            to or stored on our servers.
          </P>

          <H5>Camera Video</H5>
          <P>
            The app may use the camera for color detection missions, hand gesture recognition
            missions, and tutorial hand interaction steps. For example, the BridgeFindColor
            mission may use camera video to identify colors, and the BridgeChooseMaterial
            mission may use hand gesture recognition.
          </P>
          <P>
            Camera video is processed in real time using on-device technologies such as Apple
            Vision Framework. We do not store camera video, upload it to our servers, or use it
            for advertising or analytics.
          </P>

          <H5>Photos</H5>
          <P>
            Some tutorial steps may use a camera photo or selfie for an animal matching
            activity. The photo is processed temporarily for that activity and then immediately
            discarded. We do not store or upload these photos.
          </P>

          <H5>Microphone Voice Input</H5>
          <P>
            The app may provide voice input features, such as entering a nickname or naming a
            bridge. We do not store raw voice recordings. Voice input is converted into short
            text and used to perform the requested feature.
          </P>
          <P>
            Depending on the platform, speech recognition may be processed in part by Apple,
            Google, or the user’s browser provider. We do not store raw voice recordings on our
            servers. We only use the recognized text for app functionality.
          </P>

          <H4>2.2 Information Stored Locally on the Device</H4>
          <P>
            The following information is stored by default only on the user’s device and is not
            sent to our servers:
          </P>
          <UL
            items={[
              "nickname entered by the user",
              "selected age range, if provided",
              "mission progress",
              "number of stars",
              "earned badges",
              "in-app settings or progress records",
            ]}
          />
          <P>
            This information is used to continue learning progress in the app. It may be deleted
            when the user deletes the app or uses an in-app reset feature.
          </P>

          <H4>2.3 Information Stored on Servers Only When Parent Report Sharing Is Used</H4>
          <P>
            Only when the user explicitly selects “View Parent Report,” “Share Parent Report,”
            or a similar parent report feature, some information may be uploaded to our servers
            or to our service provider, such as Supabase.
          </P>
          <P>The uploaded information may include:</P>
          <UL
            items={[
              "mission evaluation results",
              "competency scores for problem-solving, creativity, self-directed learning, and expression",
              "mission duration",
              "whether the camera or microphone was used",
              "nickname",
              "number of stars",
              "earned badges or learning achievement information",
            ]}
          />
          <P>
            A parent report may be shared through a URL containing a share_token. Anyone who
            receives the sharing URL may be able to view the report, so parents and guardians
            should share the link only with trusted people.
          </P>
          <P>
            We do not upload parent report data without an explicit user action. Features that
            upload children’s personal information to a server are designed to require parental
            or legal guardian confirmation, consent, or a parental gate.
          </P>

          <H4>2.4 Interactive Educational Assistant or AI Companion Information</H4>
          <P>
            The service may provide an interactive educational assistant or AI companion to help
            children understand and complete missions. To provide this feature, we may
            temporarily process content selected or entered by the child, text converted from
            speech recognition, and mission context.
          </P>
          <P>
            We do not use this information for advertising, targeted advertising, user tracking,
            or sale of personal information. If an external AI service provider is used for the
            interactive educational assistant feature, we will provide information about what
            data is sent, the provider, the purpose of processing, and whether the data is
            retained through this Privacy Policy or a separate notice.
          </P>

          <H4>2.5 Speech Recognition Providers</H4>
          <P>Speech recognition may be provided by the following platform providers:</P>
          <UL
            items={[
              "iOS: Apple SFSpeechRecognizer",
              "Android: Google Speech Recognizer",
              "Web: Web Speech API or the browser’s speech recognition provider",
            ]}
          />
          <P>
            These providers may process voice data to perform speech recognition. Their own
            privacy policies and terms may apply. We do not store raw voice recordings on our
            servers.
          </P>

          <H4>2.6 Technical Operation Information</H4>
          <P>
            For web hosting, database operation, security, and error prevention, service
            providers such as Vercel and Supabase may temporarily process technical information
            such as IP address, request time, user agent, and server logs.
          </P>
          <P>
            We do not use this technical information for child behavior tracking, advertising,
            targeted advertising, or third-party analytics.
          </P>

          <H4>2.7 Information We Do Not Collect</H4>
          <P>We currently do not collect:</P>
          <UL
            items={[
              "precise location information",
              "contacts",
              "advertising identifiers such as IDFA or AAID",
              "external social login information",
              "behavioral data for third-party advertising or targeted advertising",
              "payment card information",
              "raw camera video",
              "raw voice recordings",
              "stored photo or video files",
            ]}
          />
          <P>
            The service is currently free. If in-app purchases are introduced in the future,
            payments may be processed through Apple App Store or Google Play payment systems. We
            will not directly store payment card numbers. We will update this Privacy Policy and
            app marketplace privacy disclosures if in-app purchases are introduced.
          </P>

          <H3>3. How We Use Information</H3>
          <P>We use information to:</P>
          <UL
            items={[
              "provide STEAM learning missions",
              "save mission progress",
              "show stars, badges, and learning achievements",
              "generate learning activity results based on problem-solving, creativity, self-directed learning, and expression",
              "generate and share parent reports",
              "provide app features such as voice input, color recognition, and hand gesture recognition",
              "provide the interactive educational assistant or AI companion feature",
              "maintain service security and prevent unauthorized access",
              "prevent errors and maintain service stability",
              "comply with applicable laws and app marketplace policies",
            ]}
          />
          <P>
            We do not use children’s information for advertising, targeted advertising,
            third-party analytics, user tracking, or sale of personal information.
          </P>

          <H3>4. Sharing Information</H3>
          <P>
            We do not sell children’s personal information. We also do not provide children’s
            information to third-party advertising networks, data brokers, or targeted
            advertising providers.
          </P>
          <P>We currently do not:</P>
          <UL
            items={[
              "display ads",
              "use third-party analytics tools such as Firebase Analytics or Google Analytics",
              "track users",
              "use advertising identifiers",
              "collect location information",
              "access contacts",
              "use external social login",
            ]}
          />
          <P>We may use the following types of service providers to operate the service:</P>
          <UL
            items={[
              "Vercel for web hosting",
              "Supabase for database hosting and parent report storage",
              "Apple, Google, or browser providers for speech recognition",
              "external AI service providers, if needed to provide the interactive educational assistant feature",
            ]}
          />
          <P>
            These providers process information only as necessary for service operation,
            security, infrastructure, or the requested functionality.
          </P>
          <P>
            When the parent report sharing feature is used, the parent or family member who
            receives the sharing URL may view the report. We do not publicly post reports. The
            sharing URL is shared only when the user chooses to share it.
          </P>
          <P>
            We may disclose information if required by law or when necessary to protect the
            service or our users.
          </P>

          <H3>5. Data Retention and Security</H3>
          <P>We retain personal information only for as long as necessary.</P>
          <UL
            items={[
              "On-device data: stored on the user’s device while the app is used. It may be deleted when the user deletes the app or uses an in-app reset feature.",
              "Parent report data: retained to provide the report sharing feature. By default, we retain parent report data for up to 12 months from upload, then delete or de-identify it. We may delete it earlier upon request from a parent or legal guardian.",
              "Technical logs: retained only as long as necessary for security, error prevention, and service operation.",
            ]}
          />
          <P>We use reasonable safeguards to protect information, including:</P>
          <UL
            items={[
              "HTTPS encrypted communication",
              "Supabase Row Level Security (RLS)",
              "access controls",
              "data minimization",
              "token-based access for parent report URLs",
              "limited operator access",
              "deletion request procedures",
            ]}
          />
          <P>
            No internet or electronic storage method is completely secure. We will continue to
            improve our reasonable safeguards.
          </P>

          <H3>6. User Rights</H3>
          <P>
            Parents or legal guardians may exercise the following rights regarding their child’s
            personal information:
          </P>
          <UL
            items={[
              "request access",
              "request correction",
              "request deletion",
              "request restriction of processing",
              "withdraw consent",
              "request data portability or transfer",
              "prevent further collection",
            ]}
          />
          <P>Requests may be sent to:</P>
          <UL
            items={[
              <>
                Email:{" "}
                <a
                  className="text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="mailto:help@arcawave.xyz"
                >
                  help@arcawave.xyz
                </a>
              </>,
            ]}
          />
          <P>
            We may request the minimum information necessary to verify that the requester is a
            parent or authorized legal guardian. For example, we may ask for the report URL,
            share_token, nickname, or the requester’s contact information.
          </P>
          <P>We will respond within a reasonable period in accordance with applicable law.</P>

          <H3>7. Children’s Privacy</H3>
          <P>
            The service is directed to children and is designed with children under 13 in mind.
            We strive to comply with children’s privacy laws, including COPPA.
          </P>
          <P>We follow these principles:</P>
          <UL
            items={[
              "We process only the minimum information necessary.",
              "We do not provide advertising or targeted advertising.",
              "We do not use third-party analytics tools.",
              "We do not collect location information or contacts.",
              "Camera video and photos are processed on device whenever possible.",
              "We do not store raw voice recordings on our servers.",
              "Parent report uploads are designed to require explicit user action and parental or legal guardian confirmation.",
              "Parents or legal guardians may request access, correction, deletion, or prevention of further collection of their child’s information.",
            ]}
          />
          <P>
            If external links, purchases, payments, sharing, or adult-directed features are
            added to the service, we will apply a parental gate or other appropriate protective
            procedure.
          </P>

          <H3>8. International Data Transfer</H3>
          <P>
            The service may be provided globally, and the servers used by our service providers
            may be located in South Korea, the United States, or other countries. The actual
            storage location may vary depending on the configuration and region of service
            providers such as Supabase and Vercel.
          </P>
          <P>Examples of international processing may include:</P>
          <UL
            items={[
              "Supabase: storing parent report data and operating the database",
              "Vercel: web hosting and technical log processing",
              "Apple, Google, or browser providers: speech recognition processing",
              "external AI service providers: text processing necessary to provide the interactive educational assistant feature",
            ]}
          />
          <P>
            We apply reasonable safeguards such as notice, consent where required, contractual
            protections, access controls, and encrypted communication in accordance with
            applicable laws.
          </P>

          <H3>9. Policy Changes</H3>
          <P>
            We may update this Privacy Policy when the service, laws, or app marketplace
            policies change.
          </P>
          <P>
            If we make material changes, we will notify users through the app, website, or
            another appropriate method. The updated policy will apply from the effective date
            shown in the policy.
          </P>

          <H3>10. Contact</H3>
          <P>
            For privacy questions, deletion requests, or parental rights requests, please
            contact us using the information below.
          </P>
          <UL
            items={[
              "Service: 몽글키즈 (Monglekids)",
              "Operator: Arcawave",
              <>
                Email:{" "}
                <a
                  className="text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="mailto:help@arcawave.xyz"
                >
                  help@arcawave.xyz
                </a>
              </>,
              "Website: https://www.monglekids.com",
            ]}
          />
        </Section>

        {/* ---------- 4. CONTACT ---------- */}
        <Section id="contact" title="4. Contact / 연락처">
          <P>
            개인정보 보호 관련 문의, 부모 또는 법정대리인의 권리 행사, 자녀 데이터 삭제 요청은
            아래 연락처로 보내주세요.
          </P>
          <P>
            For privacy questions, parental rights requests, or child data deletion requests,
            please contact us at:
          </P>

          <div className="my-5 grid grid-cols-1 gap-3 rounded-2xl bg-white p-5 ring-1 ring-grape-100/70 clay-shadow-sm sm:p-6">
            <ContactRow label="서비스명 / Service" value="몽글키즈 (Monglekids)" />
            <ContactRow label="운영자 / Operator" value="Arcawave" />
            <ContactRow
              label="이메일 / Email"
              value={
                <a
                  className="inline-flex items-center gap-1.5 text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="mailto:help@arcawave.xyz"
                >
                  <Mail className="h-3.5 w-3.5" />
                  help@arcawave.xyz
                </a>
              }
            />
            <ContactRow
              label="웹사이트 / Website"
              value={
                <a
                  className="inline-flex items-center gap-1.5 text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="https://www.monglekids.com"
                >
                  <Globe className="h-3.5 w-3.5" />
                  https://www.monglekids.com
                </a>
              }
            />
            <ContactRow
              label="개인정보처리방침 / Privacy Policy URL"
              value={
                <a
                  className="text-grape-700 underline underline-offset-2 hover:text-grape-800"
                  href="https://www.monglekids.com/privacy"
                >
                  https://www.monglekids.com/privacy
                </a>
              }
            />
          </div>
        </Section>
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  );
}

/* ---------------- typography helpers ---------------- */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-grape-100/70 pt-12 mt-14 first:mt-0 first:border-t-0 first:pt-0">
      <h2 className="text-balance text-[22px] font-bold leading-snug tracking-tight text-ink-900 sm:text-[26px]">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 text-[18px] font-semibold leading-snug text-ink-900">
      {children}
    </h3>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mt-6 text-[15.5px] font-semibold leading-snug text-ink-800">
      {children}
    </h4>
  );
}

function H5({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="font-display mt-5 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-grape-700">
      {children}
    </h5>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[15px] leading-[1.78] text-ink-700">{children}</p>
  );
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.7] text-ink-700 marker:text-grape-400">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function TOCItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="block rounded-lg px-2 py-1.5 transition hover:bg-grape-50 hover:text-grape-700"
      >
        {children}
      </a>
    </li>
  );
}

function Meta({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
      <dt className="font-display text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-400 sm:w-[170px] sm:flex-none">
        {label}
      </dt>
      <dd className="text-ink-700">{value}</dd>
    </div>
  );
}

function ContactRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
      <span className="font-display text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-400 sm:w-[200px] sm:flex-none">
        {label}
      </span>
      <span className="text-[14.5px] text-ink-800">{value}</span>
    </div>
  );
}

/* ---------------- summary table data ---------------- */

const SUMMARY_ROWS: { k: string; v: string }[] = [
  { k: "광고", v: "표시하지 않습니다." },
  { k: "사용자 추적", v: "하지 않습니다." },
  { k: "광고 식별자", v: "IDFA, AAID 등 광고 식별자를 사용하지 않습니다." },
  {
    k: "제3자 분석 도구",
    v: "Firebase Analytics, Google Analytics 등 제3자 분석 도구를 사용하지 않습니다.",
  },
  { k: "위치 정보", v: "수집하지 않습니다." },
  { k: "연락처", v: "접근하지 않습니다." },
  {
    k: "카메라 영상",
    v: "색 찾기와 손 동작 인식에 사용되며, 저장하거나 서버로 전송하지 않습니다.",
  },
  {
    k: "사진",
    v: "튜토리얼 활동에 일시적으로 사용될 수 있으며, 즉시 폐기하고 저장하지 않습니다.",
  },
  {
    k: "음성 원본",
    v: "저장하지 않습니다. 음성은 짧은 텍스트로 변환되어 앱 기능에만 사용됩니다.",
  },
  {
    k: "기기 저장 정보",
    v: "닉네임, 선택한 나이대, 미션 진행 상태, 별, 뱃지는 기본적으로 기기에만 저장됩니다.",
  },
  {
    k: "서버 저장",
    v: "부모 리포트 확인/공유 기능을 명시적으로 사용하는 경우에만 일부 학습 결과가 서버에 저장됩니다.",
  },
  { k: "데이터 판매", v: "개인정보를 판매하지 않습니다." },
  {
    k: "삭제 요청",
    v: "부모 또는 법정대리인은 자녀 데이터의 열람, 수정, 삭제를 요청할 수 있습니다.",
  },
];
